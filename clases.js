class Electrodomestico {
    marca;
    color;
    #precio;
    #consumo;

    constructor(marca,color,precio,consumo){
        this.marca = marca;
        this.color = color;
        this.#precio = precio;
        this.#consumo = consumo;
    }

    get getPrecio(){
        return this.#precio = precio;
    }
    get getConsumo(){
        return this.#consumo = consumo;
    }

    set setPrecio(precio){
        this.#precio = precio;
    }
    set setConsumo(consumo){
        this.#consumo = consumo;
    }
}

class Lavadora extends Electrodomestico{
    #carga;
    #peso;

    constructor(marca,color,precio,consumo,carga,peso){
        super(marca,color,precio,consumo)
        this.#carga = carga;
        this.#peso = peso;
    }

    get getCarga(){
        return this.#carga = carga;
    }
    get getPeso(){
        return this.#peso = peso;
    }

    set setCarga(carga){
        this.#carga = carga;
    }
    set setPeso(peso){
        this.#peso = peso;
    }

}

class Television extends Electrodomestico{
    #pulgadas;
    #smartTv;
    constructor(marca,color,precio,consumo,pulgadas,smartTv){
        super(marca,color,precio,consumo)
        this.#pulgadas = pulgadas;
        this.#smartTv = smartTv;
    }

    get getPulgadas(){
        return this.#pulgadas = pulgadas;
    }
    get getSmartTv(){
        return this.#smartTv = smartTv;
    }

    set setPulgadas(pulgadas){
        this.#pulgadas = pulgadas;
    }
    set setSmartTv(smartTv){
        this.#smartTv = smartTv;
    }
    
}

