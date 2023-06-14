

export default function RenderListas(props) {
    
    const items = props.items;
    const lista_items = items.map((item) =>
        <li>Ropa: {item}</li>
    );

    return (
        <ul type="square">{lista_items}</ul>
    )
}
