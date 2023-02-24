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
