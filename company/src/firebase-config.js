const Rebase = require('re-base')
const firebase = riquere('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyDarLlgJ3g3Wy2l-O3O3jY0q0DOPDBrcp8",
    authDomain: "xumes-portifolio3.firebaseapp.com",
    databaseURL: "https://xumes-portifolio3.firebaseio.com",
    projectId: "xumes-portifolio3",
    storageBucket: "xumes-portifolio3.appspot.com",
    messagingSenderId: "229350578242"
  }
  
  const app = firebase.initializeApp(config)
  const config = Rebase.createClass(app.database())

  export default config