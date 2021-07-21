// Application
class CrudDocument extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            documentsArray: []
        };
    }
    componentDidMount() {
        this.chargementDonnees();
    }
    chargementDonnees() {

        var documentsArray = null;

        // affichage de données par Ajax

        $.getJSON("api/getDocument.php",
            function (data) {
                this.setState({ documentsArray: data });
            }.bind(this))
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            });
    }
    //add Document
    adddocument() {
        $.ajax({
            url: "api/addDocument.php",
            method: "POST",
            data: {

                document_name: adddocumentname.value,
                date_expiration: adddate_expiration.value,
                etat: addetat.value

            },
            success: function (data) {
                this.chargementDonnees()
                $("#exampleModalCenter").modal('hide');
                console.log(data)
            }.bind(this)
        })
            .preventDefault();
    }
    // Remove Document
    removedocument(id_document) {
        $.ajax({
            url: "api/deleteDocument.php",
            method: "POST",
            data: {
                id_document: id_document
            },
            success: function (data) {
                //   $(this).parent().remove();
                this.chargementDonnees()
            }.bind(this)
        })

    }


    //update 
    showUpdateModel(document) {
        this.setState({ document: document })
    }



    //update Docment
    updatedocument() {
        console.log(this.state.document)
        $.ajax({
            url: "api/updateDocment.php",
            method: "POST",
            data: {
                id_document: this.state.document.id_document,
                document_name: updatedocument_name.value,
                date_expiration: updatedate_expiration.value,
                etat: updateetat.value
            },
            success: function (data) {
                this.chargementDonnees()
                $("#exampleModalCenter1").modal('hide');
                console.log(data)
            }.bind(this)
        })
        e.preventDefault();
    }






    onChangeInput(e) {
    //    this.setState({ document: { ...this.state.document: e.target.value } })
    //     // onChange={(e)=> this.setState({document: e.target.value})}
    //     this.setState({value: e.target.value})
    }




    render() {
        let documentsArray = this.state.documentsArray.map((document) => {
            return (
                <Document
                    key={document.id_document}
                    document={document}
                    onClickClose={this.removedocument.bind(this, document.id_document)}
                    onClickUpdate={this.showUpdateModel.bind(this, document)}
                />
            )
        })

        return (
            <div className="container">
                {/* ADD Model */}
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Ajouter Document</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form
                                    id="form-add"
                                    className="form-horizontal"
                                    onSubmit={this.adddocument.bind(this)}>


                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputName4">Document</label>
                                            <input type="text" list="documents" className="form-control name" id="adddocumentname" />
                                            <datalist id="documents">
                                                <option>Carte d’Identité Nationale Électronique (CINE)</option>
                                                <option>Passport</option>
                                                <option>Permis de conduire</option>
                                                <option>Carte grise</option>
                                                <option>Carte d’immatriculation</option>
                                                <option>Carte de résidence</option>
                                                <option>Contrôle technique
                                                </option>
                                                <option>aAsurance des voitures</option>
                                            </datalist>

                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputLast4">Date d'expiration</label>
                                            <input type="date" className="form-control date_expiration" id="adddate_expiration" placeholder="Last name" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputMatricule4">Etat</label>
                                            <input type="text" className="form-control etat" id="addetat" placeholder="etat de document" />
                                        </div>
                                    </div>



                                    <div className="input-group text-right">
                                        <div className="input-group-btn">
                                            <button type="submit" className="btn btn-primary submit  ">AJOUTER DOCUMENT</button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>
                {/* edit Model */}
                <div className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle1"> Document</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form
                                    id="form-edit"
                                    className="form-horizontal"
                                    onSubmit={this.updatedocument.bind(this)}>


                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputName4">Document</label>
                                            <input type="text"
                                            // onChange={this.updatedocument_name.bind(this)}  
                                            // defaultValue={this.state.document}
                                    // value={this.state.document} onChange={(e) => {this.setState({ document_name:e.target.value.updatedocument_name })}}
                                    value={this.state.document.id_document} onChange={(e) => this.setState({ document: { ...this.state.document, id_document: e.target.value } })}
                                             className="form-control updatedocument_name" id="updatedocument_name" />


                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputLast4">Date d'expiration</label>
                                            <input type="date" 
                                              
                                            className="form-control date_expiration" id="updatedate_expiration" placeholder="date" />
                                        </div>
                                    </div>
                                    value={this.state.document.date_expiration} onChange={(e) => this.setState({ document: { ...this.state.document, date_expiration: e.target.value } })}
                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputMatricule4">Etat</label>
                                            <input type="text"   className="form-control etat" id="update_etat" placeholder="etat de document" />
                                        </div>
                                    </div>



                                    <div className="input-group text-right">
                                        <div className="input-group-btn">
                                            <button type="submit" className="btn btn-primary submit  "> ENREGISTER EDIT</button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>


     


                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead">
                            <tr>
                                <th scope="col">Document</th>
                                <th scope="col">Date d'expiration</th>
                                <th scope="col">Etat</th>

                                <th scope="col"></th>
                                <th scope="col"></th>


                            </tr>
                        </thead>
                        <tbody>

                            {documentsArray}
                        </tbody>
                    </table>


                </div>
            </div>

        )
    }
}