import React from "react";

export interface Node {
    id: string;
    label: string;
    children?: Node[];
}

interface TreeProps {
    nodes: Node[];
}

const Tree: React.FC<TreeProps> = ({ nodes }) => {
    const renderNode = (node: Node) => {
        return (
            <li key={node.id}>
                {node.label}
                {node.children && (
                    <ul>
                        {node.children.map((child) => renderNode(child))}
                    </ul>
                )}
            </li>
        );
    };

    return <ul>{nodes.map((node) => renderNode(node))}</ul>;
};

export default Tree;



// const nodes: Node[] = [
//     {
//         id: "1",
//         label: "火腿三明治",
//         children: [
//             {
//                 id: "2",
//                 label: "鬆軟的麵包",
//                 children: [
//                     {
//                         id: "3",
//                         label: "牛奶",
//                     },
//                     {
//                         id: "4",
//                         label: "雞蛋",
//                     },
//                     {
//                         id: "5",
//                         label: "麵團",
//                     },
//                     {
//                         id: "6",
//                         label: "發酵劑",
//                     },
//                 ],
//             },
//             {
//                 id: "7",
//                 label: "烤香腸",
//             },
//             {
//                 id: "8",
//                 label: "蔬菜",
//             },
//             {
//                 id: "9",
//                 label: "雞蛋",
//             }
//         ],
//     },
// ];
//  {/* <Tree nodes={nodes} /> */}
