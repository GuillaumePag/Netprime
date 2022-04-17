// Const création du "header"
const HeaderVueJs = {
  template: `
  <div class="hautDePage">
    <h2> NETPRIME+</h2>
    <p class="slogan"> La Plateforme vidéo complétement original</p>
    


  </div>
  `,
};

// Const création du "body"p1
const BodyVueJsP1 = {
  template: `
  <div class="milieuDePage1">  
      <div class="p1">
        <h3> NOS FORMULES D'ABONNEMENT</h3>
        <p> Toutes nos formules d'abonnement sont 100% sans engagement et
        résiliable à tout moment. Paiement pas CB,paypal et en Bitcoin possible.</p>
      </div>  
  </div>
  `,
};

// Const création du "body"p2
const BodyVueJsP2 = {
  // Props en chaine de carcatères
  props: {
    typeAbo: String,
    ecran: String,
    prix: String,
  },
  template: `
  <div>
        <div class="boxMilieuDePage"> 
          <h2>{{typeAbo}}</h2>
          <p>{{ecran}}</p>
          <p>{{prix}}</p>
          <button class="buttonsabo">S'ABONNER</button>
          <br>
        </div>
  </div>
  
  `,
};

const FooterrVueJs = {
  template: `
  <div class="basDePage">
  <h3> NETPRIME+</h3>
  <p class="droitsReserve">&copy;Tous droits réservés </p>

  </div>
  `,
};

// Composant racine
const RootComponent = {
  //Composant "Appel"
  //des autres const pour pouvoir les appeler dans le template
  components: {
    entête: HeaderVueJs,
    corps: BodyVueJsP1,
    corps2: BodyVueJsP2,
    pied: FooterrVueJs,
  },

  // Data properties
  data() {
    return {};
  },

  // Template du composant RACINE ("principal")
  template: `
  <div>
    <entête/>
    <corps/>
      <div class="milieuDePage2">
        <corps2 typeAbo="SOLO" ecran="1 ECRAN VIDEO HD" prix="9.99/MOIS"></corps2>
        <corps2 typeAbo="FAMILY" ecran="4 ECRAN VIDEO HD" prix="12.99/MOIS"></corps2>
        <corps2 typeAbo="FAMILY 4K" ecran="4 ECRAN VIDEO 4K" prix="15.99/MOIS"></corps2>
      </div>
    <pied/>
  </div>`,
};

// Création de l'app Vue
Vue.createApp(RootComponent).mount("#root");
