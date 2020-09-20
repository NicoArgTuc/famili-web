from flask import Flask, session, render_template, redirect, url_for, request, jsonify
from flask_json import FlaskJSON, JsonError, json_response, as_json
import json

app = Flask(__name__)
FlaskJSON(app)
app.secret_key = "clave secreta"

@app.route('/')
def principal(): #INICIAR SESION/REGISTRARSE // INICIO
    if 'nombre' in session:
        nombre = session['nombre']
        return render_template("modDeInbox.html")
    return render_template('login.html')

@app.route('/processLogin', methods=['POST'])
def processLogin():
    f = open("cuentas.txt","r")
    nombre = request.form.get("nombre")
    a = f.readline()
    while nombre not in a:
        if a != '':
            a = f.readline()
        else:
            break
    else:
        f.close()
        cuenta = json.loads(a)
        if cuenta["password"] == request.form.get("password"):
            session['nombre'] = cuenta['nombre']
            return redirect(url_for("principal"))
        else:
            return login('La contraseña es incorrecta, vuelva a intentar')
    f.close()
    return login('No existe cuenta para el nombre '+nombre)

@app.route("/chat")
def chat():
    return render_template("modDeInbox.html")

@app.route("/recibir", methods=['GET', 'POST'])
def recibir():
    if request.method == "POST":
        mensaje = request.form.get("mensaje")
        print(mensaje)
        return json_response(estado = "Enviado")

    return json_response(estado = "Error al enviar")

@app.route("/conversacion-<string:contacto>")
def conversacion(contacto):
    f = open( contacto+".txt","r")
    t = f.readline()
    f.close()
    return json.loads(t)

if __name__ == '__main__':
    app.run()