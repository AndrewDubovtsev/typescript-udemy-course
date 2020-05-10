// Drag & Drop Interfaces
// namespaces are a TypeScript feature
namespace App {
    // Export means the interface will be available inside the namespace, but outside of the file
    export interface Draggable {
        dragStartHandler(event: DragEvent): void;
        dragEndHandler(event: DragEvent): void;
    }

    export interface DragTarget {
        // The thing you're dragging an element over is a valid drag target
        dragOverHandler(event: DragEvent): void;
        dropHandler(event: DragEvent): void;
        dragLeaveHandler(event: DragEvent): void;
    }

    // We can put anything into a namespace: classes, interfaces, etc.
}