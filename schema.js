const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require("graphql");

const FormCompra = require("./models/formCompra");

const axios = require("axios");
const axiosRetry = require("axios-retry");

//Component - Convenios

const ConveniosType = new GraphQLObjectType({
  name: "Convenios",
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    acf: { type: ConvenioType }
  })
});

const ConvenioType = new GraphQLObjectType({
  name: "Convenio",
  fields: () => ({
    enunciado: { type: GraphQLString },
    proyectos: { type: GraphQLString },
    logo: { type: GraphQLString },
    fondo: { type: GraphQLString },
    texto: { type: GraphQLString }
  })
});

//Component - Proyectos

const ProyectosType = new GraphQLObjectType({
  name: "Proyectos",
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    acf: { type: ProyectoType }
  })
});

const ProyectoType = new GraphQLObjectType({
  name: "Proyecto",
  fields: () => ({
    imagen_proyecto: { type: GraphQLString },
    imagen_logo: { type: GraphQLString },
    nombre_proyecto: { type: GraphQLString },
    ubicacion: { type: GraphQLString },
    bajada: { type: GraphQLString },
    caracteristicas_1: { type: GraphQLString },
    caracteristicas_2: { type: GraphQLString },
    link: { type: GraphQLString }
  })
});

//Página - Inicio

const InicioType = new GraphQLObjectType({
  name: "Inicio",
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    acf: { type: ACFInicioType }
  })
});

const ACFInicioType = new GraphQLObjectType({
  name: "ACFInicio",
  fields: () => ({
    diseno: { type: EspaciosDeVidaType },
    ubicacion: { type: EspaciosDeVidaType },
    tecnologia: { type: EspaciosDeVidaType },
    terminaciones: { type: EspaciosDeVidaType }
  })
});

const EspaciosDeVidaType = new GraphQLObjectType({
  name: "EspaciosDeVida",
  fields: () => ({
    titulo: { type: GraphQLString },
    imagen: { type: GraphQLString },
    descripcion: { type: GraphQLString },
    alineacion: { type: GraphQLString }
  })
});

//Pagina Proyectos
const PagProyectosType = new GraphQLObjectType({
  name: "pagProyectos",
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    acf: { type: ACFProyectosType }
  })
});

const ACFProyectosType = new GraphQLObjectType({
  name: "ACFProyectos",
  fields: () => ({
    imagen_de_fondo: { type: GraphQLString }
  })
});

//Pagina Compra de Propiedades
const PagCompraType = new GraphQLObjectType({
  name: "pagCompra",
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    acf: { type: ACFCompraType }
  })
});

const ACFCompraType = new GraphQLObjectType({
  name: "ACFCompra",
  fields: () => ({
    imagen_de_fondo: { type: GraphQLString },
    titulo: { type: GraphQLString },
    descripcion: { type: GraphQLString },
    imagen_destacada: { type: GraphQLString }
  })
});

//Pagina Contacto
const PagContactoType = new GraphQLObjectType({
  name: "pagContacto",
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    acf: { type: ACFContactoType }
  })
});

const ACFContactoType = new GraphQLObjectType({
  name: "ACFContacto",
  fields: () => ({
    imagen_de_fondo: { type: GraphQLString },
    texto_contacto: { type: GraphQLString },
    texto_sac: { type: GraphQLString },
    texto_inversionistas: { type: GraphQLString },
    fono: { type: GraphQLString },
    email_1: { type: GraphQLString },
    email_2: { type: GraphQLString },
    link_mapa: { type: GraphQLString }
  })
});

//Pagina Inversionistas
const PagInversionistasType = new GraphQLObjectType({
  name: "pagInversionistas",
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    acf: { type: ACFInversionistasType }
  })
});

const ACFInversionistasType = new GraphQLObjectType({
  name: "ACFInversionistas",
  fields: () => ({
    imagen_de_fondo: { type: GraphQLString },
    titulo_bullets: { type: GraphQLString },
    grafico: { type: GraphQLString },
    bullet_1: { type: BulletsType },
    bullet_2: { type: BulletsType },
    bullet_3: { type: BulletsType },
    bullet_4: { type: BulletsType },
    bullet_5: { type: BulletsType },
    bullet_6: { type: BulletsType }
  })
});

const BulletsType = new GraphQLObjectType({
  name: "Bullets",
  fields: () => ({
    icono: { type: GraphQLString },
    texto: { type: GraphQLString }
  })
});

//Pagina Trayectoria
const PagTrayectoriaType = new GraphQLObjectType({
  name: "pagTrayectoria",
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    acf: { type: ACFTrayectoriaType }
  })
});

const ACFTrayectoriaType = new GraphQLObjectType({
  name: "ACFTrayectoria",
  fields: () => ({
    imagen_de_fondo: { type: GraphQLString },
    titulo_trayectoria: { type: GraphQLString },
    texto_trayectoria: { type: GraphQLString },
    item_galeria_1: { type: ItemGaleriaType },
    item_galeria_2: { type: ItemGaleriaType },
    item_galeria_3: { type: ItemGaleriaType },
    item_galeria_4: { type: ItemGaleriaType },
    item_galeria_5: { type: ItemGaleriaType },
    item_galeria_6: { type: ItemGaleriaType },
    item_galeria_7: { type: ItemGaleriaType },
    item_galeria_8: { type: ItemGaleriaType },
    item_galeria_9: { type: ItemGaleriaType }
  })
});

const ItemGaleriaType = new GraphQLObjectType({
  name: "ItemGaleria",
  fields: () => ({
    imagen: { type: GraphQLString },
    proyecto: { type: GraphQLString },
    comuna: { type: GraphQLString }
  })
});

//Pagina Oportunidades
const PagOportunidadesType = new GraphQLObjectType({
  name: "pagOportunidades",
  fields: () => ({
    id: { type: GraphQLInt },
    status: { type: GraphQLString },
    acf: { type: ACFOportunidadesType }
  })
});

const ACFOportunidadesType = new GraphQLObjectType({
  name: "ACFOportunidades",
  fields: () => ({
    imagen_de_fondo: { type: GraphQLString },
    titulo_oportunidades: { type: GraphQLString },
    texto_oportunidades: { type: GraphQLString }
  })
});

const ItemOportunidadesType = new GraphQLObjectType({
  name: "ItemOportunidades",
  fields: () => ({
    logo: { type: GraphQLString },
    imagen_fondo: { type: GraphQLString },
    enunciado: { type: GraphQLString },
    cuerpo: { type: GraphQLString },
    adheridos: { type: GraphQLString }
  })
});

//---------------- Forms Types -------------------

const FormCompraType = new GraphQLObjectType({
  name: "formCompra",
  fields: () => ({
    nombre: { type: GraphQLString },
    telefono: { type: GraphQLString },
    mail: { type: GraphQLString },
    direccion: { type: GraphQLString },
    comuna: { type: GraphQLString },
    comentarios: { type: GraphQLString }
  })
});

// Consulta Raíz

axiosRetry(axios, { retries: 6 });

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    proyectos: {
      type: new GraphQLList(ProyectosType),
      resolve(parent, args) {
        return axios
          .get(
            "http://betafuenzalida.bylcomunicaciones.com/wp-json/wp/v2/proyectos"
          )
          .then(res => res.data);
      }
    },
    convenios: {
      type: new GraphQLList(ConveniosType),
      resolve(parent, args) {
        return axios
          .get(
            "http://betafuenzalida.bylcomunicaciones.com/wp-json/wp/v2/convenios"
          )
          .then(res => res.data);
      }
    },
    inicio: {
      type: InicioType,
      resolve(parent, args) {
        return axios
          .get(
            "http://betafuenzalida.bylcomunicaciones.com/wp-json/wp/v2/pages/41"
          )
          .then(res => res.data);
      }
    },
    pagProyectos: {
      type: PagProyectosType,
      resolve(parent, args) {
        return axios
          .get(
            "http://betafuenzalida.bylcomunicaciones.com/wp-json/wp/v2/pages/76"
          )
          .then(res => res.data);
      }
    },
    pagCompra: {
      type: PagCompraType,
      resolve(parent, args) {
        return axios
          .get(
            "http://betafuenzalida.bylcomunicaciones.com/wp-json/wp/v2/pages/85"
          )
          .then(res => res.data);
      }
    },
    pagInversionistas: {
      type: PagInversionistasType,
      resolve(parent, args) {
        return axios
          .get(
            "http://betafuenzalida.bylcomunicaciones.com/wp-json/wp/v2/pages/128"
          )
          .then(res => res.data);
      }
    },
    pagTrayectoria: {
      type: PagTrayectoriaType,
      resolve(parent, args) {
        return axios
          .get(
            "http://betafuenzalida.bylcomunicaciones.com/wp-json/wp/v2/pages/203"
          )
          .then(res => res.data);
      }
    },
    pagOportunidades: {
      type: PagOportunidadesType,
      resolve(parent, args) {
        return axios
          .get(
            "http://betafuenzalida.bylcomunicaciones.com/wp-json/wp/v2/pages/277"
          )
          .then(res => res.data);
      }
    },
    pagContacto: {
      type: PagContactoType,
      resolve(parent, args) {
        return axios
          .get(
            "http://betafuenzalida.bylcomunicaciones.com/wp-json/wp/v2/pages/99"
          )
          .then(res => res.data);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    insertFormCompra: {
      type: FormCompraType,
      args: {
        nombre: { type: GraphQLString },
        telefono: { type: GraphQLString },
        mail: { type: GraphQLString },
        direccion: { type: GraphQLString },
        comuna: { type: GraphQLString },
        comentarios: { type: GraphQLString }
      },
      resolve(parent, args) {
        let formCompra = new FormCompra({
          nombre: args.nombre,
          telefono: args.telefono,
          mail: args.mail,
          direccion: args.direccion,
          comuna: args.comuna,
          comentarios: args.comentarios
        });
        return formCompra.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
