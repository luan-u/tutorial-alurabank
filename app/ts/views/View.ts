export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;

   // tornando  o parâmetro opcional!
    constructor(seletor: string, escapar?: boolean) {

        this._elemento = $(seletor);
        this._escapar = escapar;
    }
  // código posterior omitido

    update(model: T) {

        let template = this.template(model);
        if(this._escapar) 
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._elemento.html(template);
    }

    abstract template(model: T): string;

}