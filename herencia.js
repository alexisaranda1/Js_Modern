class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo
    }
    mostrarInformacion(){
        return "cliente",this.nombre;
    }
    static bienenida(){
        return "Bienvenido";
    }
    
}

class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
}

const juan = new Cliente("Juan", 200);
const empresa = new Empresa("Codigo con Juan", 500, 1234232,"algo");
console.log(empresa.mostrarInformacion());
console.log(empresa);