interface Ientorno {
    id: number;
    descripcion: string;
}

interface Idesarrollo {
    id_dev: number;
    entorno: Ientorno[];
}

interface Ipruebas {
    id_test: number;
    entorno: Ientorno[];
}

interface Iproduccion {
    id_prod: number;
    entorno: Ientorno[];
}

export { Ientorno, Idesarrollo, Ipruebas, Iproduccion };
