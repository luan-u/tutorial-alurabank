export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;

   // tirou o tipo opcional que recebia undefined caso não fosse passado para um valor padrão, no caso false
    constructor(seletor: string, escapar: boolean = false) {

        console.log(escape);
        this._elemento = $(seletor);
        this._escapar = escapar;
    }
  // código posterior omitido

    update(model: T) {

        const t1 = performance.now();

        let template = this.template(model);
        if(this._escapar) 
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._elemento.html(template);

        const t2 = performance.now();
        console.log(`Tempo de execução do método adiciona(): ${(t2 - t1)/1000} segundos`);

    }

    abstract template(model: T): string;

}