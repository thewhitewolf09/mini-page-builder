import React from "react";
import DraggableComponent from "./DraggableComponent";
import "./Canvas.css";

function Canvas({ components, onDrop, onSelect, onDelete, onEdit, onDrag }) {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("type");
    const x = e.clientX;
    const y = e.clientY;
    onDrop(type, x, y);
  };

  return (
    <div className="Canvas" onDrop={handleDrop} onDragOver={handleDragOver}>
      {components.map((comp) => (
        <DraggableComponent
          key={comp.id}
          component={comp}
          onSelect={onSelect}
          onDelete={onDelete}
          onEdit={onEdit}
          onDrag={onDrag}
          selected={comp.selected}
        />
      ))}
    </div>
  );
}

export default Canvas;
