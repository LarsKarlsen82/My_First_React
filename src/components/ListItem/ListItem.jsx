export const ListItem = (props) => {

    return (

    <li>{props.item}</li>
    
    
    )
    } 
export const ListComponent = (props) => {
    return (
        <div>
        <h2>{props.title}</h2>
        <ul>
          {props.listItems.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
      </div>
    )
}