import React, { Component } from 'react'

import config, { storage } from './../firebase-config'

class AdminPortifolio extends Component {
    constructor(props) {
        super(props)

        this.gravaPortifolio = this.gravaPortifolio.bind(this)
    }

    gravaPortifolio (event){
        event.preventDefault()
        console.log(this.titulo.value)
        console.log(this.descricao.value)
        console.log(this.imagem.value)

        const arquivo = this.imagem.files[0]
        const {name, size, type} = arquivo
        console.log(name, size, type)

        const ref = storage.ref(name)
        ref.put(arquivo)
            .then(img => {
                console.log(img.metadata)
            })
    
    }

    render() {
        return (
            <div style={{padding: '120px'}}>
                <h2>Portifolio - Area Administtrativa</h2>
                <form onSubmit={this.gravaPortifolio}>
                    <div className='form-group'>
                        <label htmlFor='titulo'>Titulo</label>
                        <input type='text' className='form-control' id='titulo' placeholder='Titulo' ref={(ref) => this.titulo = ref} />

                    </div>
                    <div className='form-group'>
                        <label htmlFor='descricao'>Descrição</label>
                        <textarea className='form-control' id='descricao' rows="3" ref={(ref) => this.descricao = ref}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem">Imagem</label>
                        <input type="file" className="form-control-file" id="imagem" ref={(ref) => this.imagem = ref}/>
                    </div>

                    <button type='submit' className='btn btn-primary'>Salvar</button>
                </form>

            </div>
        )
    }
}

export default AdminPortifolio