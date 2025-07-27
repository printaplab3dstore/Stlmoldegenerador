/**
 * STL Processor - Procesamiento avanzado de archivos STL para generación de moldes
 * Incluye algoritmos para crear moldes con encastres automáticos
 */

class STLProcessor {
    constructor() {
        this.vertices = [];
        this.faces = [];
        this.normals = [];
        this.bounds = { min: { x: Infinity, y: Infinity, z: Infinity }, max: { x: -Infinity, y: -Infinity, z: -Infinity } };
    }

    /**
     * Procesa un archivo STL binario o ASCII
     */
    async processSTL(buffer) {
        const isAscii = this.isAsciiSTL(buffer);
        
        if (isAscii) {
            return this.parseAsciiSTL(buffer);
        } else {
            return this.parseBinarySTL(buffer);
        }
    }

    /**
     * Determina si el STL es ASCII o binario
     */
    isAsciiSTL(buffer) {
        const view = new Uint8Array(buffer);
        const header = String.fromCharCode.apply(null, view.slice(0, 5));
        return header.toLowerCase() === 'solid';
    }

    /**
     * Parsea STL ASCII
     */
    parseAsciiSTL(buffer) {
        const text = new TextDecoder().decode(buffer);
        const lines = text.split('\n');
        
        this.vertices = [];
        this.faces = [];
        this.normals = [];
        
        let vertexIndex = 0;
        let currentNormal = null;
        let currentVertices = [];

        for (let line of lines) {
            line = line.trim();
            
            if (line.startsWith('facet normal')) {
                const parts = line.split(' ');
                currentNormal = [
                    parseFloat(parts[2]),
                    parseFloat(parts[3]),
                    parseFloat(parts[4])
                ];
            } else if (line.startsWith('vertex')) {