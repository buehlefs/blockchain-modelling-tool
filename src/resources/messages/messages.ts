import { Node } from "@ustutt/grapheditor-webcomponent/lib/node";
import { ProjectComponent } from "project";

export const NODE_SELECTION_CHANNEL = 'node-selection';


export class NodeChangedMessage {
    readonly source: 'graph'|'property-editor';
    readonly newNode: Node;
    readonly oldNode: Node;

    constructor(newNode: Node, oldNode: Node, source: 'graph'|'property-editor') {
        this.source = source;
        this.newNode = newNode;
        this.oldNode = oldNode;
    }
}

export class NodePositionChangedMessage extends NodeChangedMessage {}

export class NodeTypeChangedMessage extends NodeChangedMessage {}

export class NodePropertiesChangedMessage extends NodeChangedMessage {}

export class NodeLayerChangedMessage {
    readonly source: 'graph'|'property-editor';
    readonly node: Node;
    readonly newLayer: number;
    readonly oldLayer: number;

    constructor(node: Node, newLayer: number, oldLayer: number, source: 'graph'|'property-editor') {
        this.source = source;
        this.node = node;
        this.newLayer = newLayer;
        this.oldLayer = oldLayer;
    }
}

export class NodeGroupChangedMessage {
    readonly source: 'graph'|'property-editor';
    readonly node: Node;
    readonly newGroup: string;
    readonly oldGroup: string;

    constructor(node: Node, newGroup: string, oldGroup: string, source: 'graph'|'property-editor') {
        this.source = source;
        this.node = node;
        this.newGroup = newGroup;
        this.oldGroup = oldGroup;
    }
}

export class ProjectComponentChangedMessage {
    readonly source: 'graph'|'property-editor';
    readonly newComponent: ProjectComponent<string>;
    readonly oldComponent: ProjectComponent<string>;

    constructor(newComponent: ProjectComponent<string>, oldComponent: ProjectComponent<string>, source: 'graph'|'property-editor') {
        this.source = source;
        this.newComponent = newComponent;
        this.oldComponent = oldComponent;
    }
}
