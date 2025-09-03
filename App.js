import react, { useState } from 'react';
import { safeAreaView, view, text, TouchbleOpacity, stylesheet, Scrollview, textIumput, Alert, TextInput } from 'react-native';


export default function App() {
const [pagina, setPagina] = useState('home')

  return ( 
    <SafeAreaView style={styles.container}>
     <Header pagina={pagina} setPagina={setPagina} />
    <ScrollView contentContainerStyle={styles.contet}>
      {pagina === 'home' && <Home />}
      {pagina === 'sobre' && <Sobre/>}
      {pagina === 'servicos' && <Servicos />}
      {pagina === 'contato' && <Contato />}
    </ScrollView>
    <Footer />
    </SafeAreaView> 
  );
}
function Header ({ pagina, setPagina}){
  return(
    <View style={styles.header}>
      <Text style={styles.headerTitle}>GAME TECH</Text>
      <View style={styles.nav}>
        {['home', 'sobre', 'serviços', 'contato'].map((p) =>(
        <TouchableOpacity
        key={p}
        style={[styles.navButton, pagina === p && styles.navButtonActive]}
        onPress={() => setPagina(p)}
        >
          <Text style={styles.navButtonText}>{p.charAt(0).toUpperCase() + p.slice(1)}</Text>
        </TouchableOpacity>
        ))}
       </View>
      </View>
  );
}

function Home(){
  return (
    <View style={style.section}>
      <Text style={styles.title}>Bem Vindo à nossa empresa</Text> 
       <Text>Somos líderes em soluções tecnológicas para o seu negócio.</Text>
    </View>
  );
}

function Sobre () {
  return(
    <View style={styles.section}>
      <Text styles={styles.title}>Sobre Nós</Text>
      <Text>Fundada em 2025, temos o compromisso de qualidade e inovação.</Text>
    </View>
  );
}

function Serviços () {
  return (
    <View style={styles. section}>
      <Text style={styles.title}>Nossos serviços</Text>
      <Text>- Consultoria em TI</Text>
      <Text>-Desenvolvimentos de software</Text>
      <Text>-Suporte Técnico</Text>
    </View>
  );
}

function Contato () {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [ mensagem, setMensagem] = React.useState('');


function enviar() {
    if (!nome || !email || !mensagem) {
        Alert.alert('Erro', 'Por favor preencha todos os campos');
        return;
    }
    Alert.alert('Mensagem enviada', `Obrigado, ${nome}! Retornaremos em breve.`);
    setNome('');
    setEmail('');
    setMensagem('');
}

return (
    <View style={styles.selection}>
        <Text style={styles.title}>contato</Text>
    <TextInput
    style={styles.input}
    placeholder="Nome"
    Value={nome}
    onChangeText={setNome}
    />
    <TextInput
    style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      />
      <TextInput
      style={[styles.input {height: 100}]}
      placeholder="Mensagem"
      value={mensagem}
      onChangeText={setMensagem}
      multiline
      />
      <TouchableOpacity style={styles.button} onPress={enviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

funtion Footer() {
    return (
        <View style={styles.footer}>
            <Text style={{ color: 'White'}}>2025 Minha Empresa. Todos os direitos reservados.</Text>
        </View>
    );  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f7fa'
    },
    header: {
        backgroundColor: '#004080',
        padding: 40,
        alignContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'espace-around'
    },
    navButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4
    },
    navButtonActive: {
        backgroundColor: '#0066cc'
    },
    navButtonText: {
        color 'white',
        fontWeight: 'bold'
    },
    content: { padding: 20, flexGrow: 1 },
  section: { marginBottom: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#004080',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#004080',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16},
  footer: { backgroundColor: '#00264d', padding: 15, alignItems: 'center'},
})




}
