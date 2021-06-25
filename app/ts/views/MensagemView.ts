class MensagemView extends View {

    update(model: string) {

        // erro de compilação
        this._elemento.innerHTML = this.template(model);
    }

    template(model: string): string {

        return `<p class="alert alert-info">${model}</p>`;
    }
}