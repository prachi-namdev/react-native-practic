import React ,{ useState ,useEffect,useRef} from 'react';
import {Button, Text,View,ImageBackground} from 'react-native';
import styles from './styles';

//usestate hook use
const profile = () => {

  const [inputValue,setInputValue] = useState(0)
  const count = useRef(0);

  useEffect(() => {
    document.title = `You clicked ${inputValue} times`;
    count.current = count.current +1;
  });

  return (
    <View style={styles.container}>
      
    <Text>increase by 1:{inputValue}</Text>
    <Button title='Press Me' onPress={() => setInputValue(inputValue+1)}>
     
    </Button>
    <Text>Render Count: {count.current}</Text>
     </View>
  );
}

export default profile