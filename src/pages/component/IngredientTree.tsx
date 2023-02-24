import React, { useState } from 'react';

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
        <li>
            <div onClick={handleClick}>
                <span>{isOpen ? '🔽' : '▶️'}</span>
                <span>{label}</span>
            </div>
            {isOpen && children && (
                <ul>
                    {children.map((child) => (
                        <li key={child.label}>
                            <TreeNode {...child} />
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

const IngredientTree = (treeData: TreeNodeProps) => {
    // const treeData: TreeNodeProps = {
    //     label: '熱狗麵包',
    //     children: [
    //         {
    //             label: '熱狗',
    //         },
    //         {
    //             label: '麵包',
    //         },
    //         {
    //             label: '番茄醬',
    //             children: [
    //                 {
    //                     label: '番茄',
    //                 },
    //                 {
    //                     label: '奶油',
    //                 },
    //             ],
    //         },
    //     ],
    // };

    return (
        <ul>
            <TreeNode {...treeData} />
        </ul>
    );
};

export default IngredientTree;
