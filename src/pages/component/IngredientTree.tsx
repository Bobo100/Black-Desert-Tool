import React, { useState } from 'react';
import uuid from 'react-uuid';
import './css/ingredientTree.css';


interface TreeNodeProps {
    label: string;
    children?: TreeNodeProps[];
}

const TreeNode = ({ label, children }: TreeNodeProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div onClick={handleClick}>
                <span>{isOpen ? '🔽' : '▶️'}</span>
                <span>{label}</span>
            </div>
            {isOpen && children && (
                <ul>
                    {children.map((child) => (
                        <li key={uuid()}>
                            <TreeNode {...child} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

const IngredientTree = ({ treeData }: { treeData: TreeNodeProps }) => {
    return (
        <div>
            <TreeNode {...treeData} />
        </div>
    );
};

export default IngredientTree;
