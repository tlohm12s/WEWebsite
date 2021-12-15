export default {
  template: `
    <div>
      <input type="text" v-model="message">

      <br> Anzahl Buchstaben: {{ message.match(/\w/g) == null ? 0 : message.match(/\w/g).length }}
      <br> Anzahl Leerzeichen: {{ message.match(/\s/g) == null ? 0 : message.match(/\s/g).length }}
      <br> Anzahl Worte: {{ message.match(/(\s|\,)/g) == null ? 0 : message.match(/(\s|\,)/g).length }}
    </div>
  `,
  data () {  return { message: 'Test' } }
}