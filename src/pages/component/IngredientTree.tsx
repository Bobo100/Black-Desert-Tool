import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { ImageCache } from '../redux/action/imageCacheActions';
import './css/ingredientTree.css';


interface TreeNodeProps {
    label: string;
    children?: TreeNodeProps[];
    imageCache?: ImageCache;
}

const TreeNode = ({ label, children, imageCache }: TreeNodeProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const name = label.split(' ')[0];

    return (
        <>
            <div onClick={handleClick} className="item">
                <span>{isOpen ? '🔽' : '▶️'}</span>
                {/* {children && <span>{isOpen ? '🔽' : '▶️'}</span>} */}
                {/* {!children && <span>🔹</span>} */}
                <span>{label}</span>
                {imageCache && imageCache[name] && (<img src={imageCache[name]} alt={label} />)}
            </div>
            {isOpen && children && (
                <ul>
                    {children.map((child) => (
                        <li key={uuid()}>
                            <TreeNode {...child} imageCache={imageCache} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

const IngredientTree = ({ treeData }: { treeData: TreeNodeProps }) => {
    const imageCache = useSelector((state: ImageCache) => state);
    return (
        <div>
            <TreeNode {...treeData} imageCache={imageCache} />
        </div>
    );
};

export default IngredientTree;
