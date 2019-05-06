var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
                <form className="contactForm">
                    <input placeholder="Imię" type="text" value={this.props.contact.firstName}/>
                    <input placeholder="Nazwisko" type="text" value={this.props.contact.lastName}/>
                    <input placeholder="Email" type="email" value={this.props.contact.email}/>
                    <button type="submit">Dodaj kontakt</button>
                </form>
        )
    },
})