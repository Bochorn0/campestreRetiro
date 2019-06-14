#VERIFICA QUE EL DIRECTORIO DE RESPALDOS NO EXCEDA EL GB DE ESPACIO SI SE EXCEDE SE ELIMINAN RESPALDOS
function verificarRespaldos(){
    SIZE=100000000000;
    #SIZE=100000000;
    CHECK=$(du -bs /datos/CTIntegral/Respaldos | cut -f1)
    if [ "$CHECK" -gt "$SIZE" ]; then
    echo 'BORRANDO RESPALDOS .....'
    borrarResplados;
    fi
}
#ELIMINA RESPALDOS DE MANERA RECURSIVA HASTA QUE SE CUMPLE LA CONDICION DEL GB 
function borrarResplados(){
    echo 'Borrando';
    dirA=$(find /datos/CTIntegral/Respaldos/* -type d  | sort | head -n 1 );
    echo $dirA Eliminado;
    rm -rf $dirA;
    verificarRespaldos
}
#COMPRIME EL CODIGO ACTUAL Y GENERA RESPALDOS DEL MISMO POR HORA Y MINUTO DE GENERACION
function comprimirYGenerarRespaldos(){
    #DIRECTORIOS BASICOS
    cd /datos/api_integral/cti/
#    Api=/datos/CTIntegral/Api;
#    Front=/datos/CTIntegral/Front;
    Api=/datos/api_integral/cti;
    Front=/var/www/html;
    Result=/datos/CTIntegral/Respaldos/`date +"%d-%m-%Y_%H_%M"`;
    #SI NO EXISTE CREAMOS LA CARPETA DEL RESPALDO
    if [ ! -d "$Result" ];then
    mkdir $Result;
    mkdir $Result/Api;
    mkdir $Result/Front;
    fi
    #COPIAMOS EL CODIGO ACTUAL A CARPETAS ESPECIALES
    cp -r -a $Api/* $Result/Api;
    cp -r -a $Front/* $Result/Front;
    cp -r -a $Front/.[^.]* $Result/Front;
    #CAMBIAMOS A CARPETA DE RESPALDOS
    cd $Result
    #COMPRIMIMOS LOS ARCHIVOS 
    tar -zcvf API.tar.gz Api/;
    tar -zcvf Front.tar.gz Front/;
    #ELIMINAMOS CARPETAS COPIADAS
    rm -rf $Result/Api
    rm -rf $Result/Front
    #CAMBIAMOS LOS PERMISOS DE CARPETA DE RESPALDOS
    chmod -R 0777 $Result;    
    #clear;
    return 1;
}
#BORRA LOS DIRECTORIOS DE CODIGO EXISTENTE PARA QUE QUEDEN LIMPIOS DE ARCHIVOS 
function borrarCodigoAnterior(){
#    Api=/datos/CTIntegral/Api;
#    Front=/datos/CTIntegral/Front;
    Api=/datos/api_integral/cti;
    Front=/var/www/html;
    rm -rf $Api/*
    rm -rf $Front/*
    rm -rf $Front/.[^.]*    
#    clear;
    return 1;
}
#COMPILA EL CODIGO QUE SE VA A PROBAR, OBTIENE LOS CAMBIOS Y PUBLICA EN EL PUERTO 8080
function compilarCodigoAProbar(){
    clear
    echo 'Compilando.....'
    cd /datos/CTIntegral
    git pull
    cd /datos/CTIntegral/CTIntegral;
    cp /datos/CTIntegral/CTIntegral/src/environments/environment_test.ts /datos/CTIntegral/CTIntegral/src/environments/environment.ts
    ng build
    cp /datos/CTIntegral/.htaccess /datos/CTIntegral/CTIntegral/dist/.htaccess 
    #clear;
    cd /datos/CTIntegral/ct_integral_api
    pm2 restart API_Integral_TEST
    echo 'Datos Compilados'
}
#PUBLICA EL CODIGO QUE ESTA GENERANDOSE EN EL AMBIENTE PRODUCTIVO 
function publicadoCodigo(){
#    Api=/datos/CTIntegral/Api;
#    Front=/datos/CTIntegral/Front;
    Api=/datos/api_integral/cti;
    Front=/var/www/html;
    #SI NO EXISTE EL DIRECTORIO DE DIST SE COMPILA
    #if [ ! -d "/datos/CTIntegral/CTIntegral/dist" ];then
    cp /datos/CTIntegral/CTIntegral/src/environments/environment_resp.ts /datos/CTIntegral/CTIntegral/src/environments/environment.ts
    cd /datos/CTIntegral/CTIntegral
    ng build    
    cp /datos/CTIntegral/.htaccess /datos/CTIntegral/CTIntegral/dist/.htaccess 
    #fi
    echo 'Eliminando Codigo Anterior ....';
    borrarCodigoAnterior    
    #COPIAR CODIGO DE API A CARPETA PRODUCTIVA
    echo 'Copiando Api.....'
    cp -r -a /datos/CTIntegral/ct_integral_api/cti/* $Api
    #COPIAR CODIGO DE FRONT A CARPETA PRODUCTIVA
    echo 'Copiando Front.....'
    cp -r -a /datos/CTIntegral/CTIntegral/dist/.[^.]* $Front
    cp -r -a /datos/CTIntegral/CTIntegral/dist/* $Front
#    cp /datos/CTIntegral/ct_integral_api/cti /datos/api_integral/cti
    #REINICIO API EN EL PM2
    pm2 restart API_Integral
    return 1;
}
#RESTAURA EL CODIGO PUBLICADO EN LA CARPETA PRODUCTIVA EN BASE A LOS RESPALDOS DE FECHAS ANTERIORES
function respaldarCodigo(){
#    Api=/datos/CTIntegral/Api;
#    Front=/datos/CTIntegral/Front;
    Api=/datos/api_integral/cti;
    Front=/var/www/html;
    #CAMBIA AL DIRECTORIO DE RESPALDOS Y HACE UN ARRAY CON LOS ARCHIVOS
    cd /datos/CTIntegral/Respaldos
    files=(*)
    #INSTRUCCIONES PARA SELECCIONAR RESPALDO
    echo 'SELECCIONA UN RESPALDO PARA CONTINUAR';
    for i in "${!files[@]}"; do 
    printf "%s\t%s\n" "$i" "${files[$i]}"
    done
    read RESPALDO;
    #CONFIRMACION PARA EL RESPALDO
    echo Estas a punto de restaurar el respaldo ${files[$RESPALDO]} Deseas Continuar ? [y/n];
    read desicion;
    if [[ $desicion == "y" || $desicion == "Y" ]]; then
    #ELIMINA EL CODIGO ANTERIOR EN PRODUCCION
    echo 'Eliminando Codigo Anterior ....';
    borrarCodigoAnterior
    #DESCOMPRIME LOS ARCHIVOS DEL RESPALDO AL CODIGO DE PRODUCCION
    echo "Descomprimiendo ${files[$RESPALDO]} ...."
    tar -zxvf /datos/CTIntegral/Respaldos/${files[$RESPALDO]}/API.tar.gz;
    tar -zxvf /datos/CTIntegral/Respaldos/${files[$RESPALDO]}/Front.tar.gz;
    #COPIAMOS RESPALDOS
    cp -r -a /datos/CTIntegral/Respaldos/Api/* $Api;
    cp -r -a /datos/CTIntegral/Respaldos/Front/* $Front
    cp -r -a /datos/CTIntegral/Respaldos/Front/.[^.]* $Front
    #ELIMINANDO CARPETAS DESCOMPRIMIDAS
    rm -rf /datos/CTIntegral/Respaldos/Api
    rm -rf /datos/CTIntegral/Respaldos/Front
    echo "CODIGO RESPALDADO AL RESPALDO ${files[$RESPALDO]} ";
    elif [[ $desicion == "n" || $desicion == "N" ]]; then
    clear
    else
    respaldarCodigo
    fi
    pm2 restart API_Integral
    return 1;
}
#PROCESAR EL CODIGO PARA PUBLICAR LOS CAMBIOS
function procesarCodigo(){
    echo 'Verificando Respaldos ....';
    verificarRespaldos
    echo 'Creando Respaldos .....';
    comprimirYGenerarRespaldos
    echo 'Copiando Archivos Nuevos ....'
    publicadoCodigo    
    return 1;
}
#INSTRUCCIONES DE USO
function instrucciones(){
    clear
    echo 'Script para Publicar Cambios Iniciando....'
    echo 'Que haras , escribe .....'
    echo ' ';
    echo '1.-  "Probar" - para compilar actualizar el codigo' 
    echo ' ';
    echo '2.-  "Procesar" - para publicarlo sin probar' 
    echo ' ';
    echo '3.-  "Restaurar" - para restaurar un codigo anterior ' 
    echo ' ';
    echo ' cualquier tecla para salir';
    read input
}
#INSTRUCCIONES
instrucciones
#OPCION 1
if [[ $input == "1" || $input == "Probar" || $input == "probar" ]]; then
compilarCodigoAProbar
#OPCION 2
elif [[ $input == "2" || $input == "Procesar" || $input == "procesar" ]]; then
procesarCodigo
#OPCION 3
elif [[ $input == "3" || $input == "Restaurar" || $input == "restaurar" ]]; then
respaldarCodigo
#clear
echo 'Procedimiento Terminado'
fi
