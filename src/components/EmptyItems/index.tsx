import { Image, Text, View } from 'react-native'
import { styles } from './styles'

export function EmptyItems() {
  return (
    <View style={styles.container}>
      <View style={styles.separatorLine} />

      <Image
        source={require('../../assets/clipboard.png')}
        resizeMode='contain'
      />

      <Text style={styles.primaryText}>
        Você ainda não tem tarefas cadastradas
      </Text>

      <Text style={styles.secondaryText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
