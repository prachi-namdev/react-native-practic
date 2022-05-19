import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      alignItems: 'center', 
      // justifyContent: 'center',
      backgroundColor: 'black'
    },
    img:{
       height:250,
       width:200,
    },
    button:{
      height:50,
      width:80,
      marginTop:50,

    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
  })

export default styles