import React from 'react';
import { TouchableOpacity, Text} from 'react-native'
import { styles } from './styles';

const TaskItem = ({item, onHandleSelected,onHandleCompleteItem}) => {
    return (
        <TouchableOpacity style={item.completed?styles.listItemContainerCompleted:styles.listItemContainer} onPress={() => onHandleSelected(item)}>
            <Text style={styles.listItem}>{item.value}</Text>
            {item.completed?null:<Text style={styles.ButtonComplete} onPress={()=>onHandleCompleteItem(item)}>Completar</Text>}
        </TouchableOpacity>
    )
}

export default TaskItem;