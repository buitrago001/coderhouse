class Pokemon{
    //Atributos
    nombre;
    tipo;
    nivel;
    entrenador;
    tipoAtaque;
    ataque;
    vida;

    // construnctor - puede usarse todos o algunos de los atributos
    constructor(nombre, tipo, nivel, entrenador, tipoAtaque, ataque, vida)
    {
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
        this.entrenador = entrenador;
        this.tipoAtaque = tipoAtaque;
        this.ataque = ataque;
        this.vida = vida;     
    }

    //metodos

    atacar = function(nombre)
    {
        console.log(this.nombre + ' ataca a ' + nombre + ' con un tipo de ataque ' + this.tipoAtaque);
    }

    evolucionar = (nombreEvolucionado, cantAtaque) =>
    {
        console.log(this.nombre + 'esta evolucionando...');
        this.nombre = nombreEvolucionado;
        this.poder += cantAtaque;
        this.nivel++;
        console.log(`Ahora paso a llamarse ${nombreEvolucionado}`);
    }

    volverPokebola =() => {
        console.log(this.nombre + ' vuelve a la pokebola')
    }

    recibirAtaque =(ataqueRecibido, atacante) => 
    {
        console.log(`el ${atacante} te ha atacado con ${ataqueRecibido}`)

    }

}
