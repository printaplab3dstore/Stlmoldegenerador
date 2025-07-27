# 🏭 Generador de Moldes STL

Una aplicación web que permite subir archivos STL y generar automáticamente moldes para impresión 3D con encastres personalizables.

## ✨ Características

- **Carga de archivos**: Soporta archivos STL mediante drag & drop o selección manual
- **Vista previa 3D**: Visualización interactiva del modelo original y el molde generado
- **Configuración avanzada**: Control sobre grosor de paredes, tolerancias, tamaño y espaciado de encastres
- **Generación automática**: Creación de moldes con encastres automáticos para facilitar el desmoldeo
- **Descarga múltiple**: Opción de descargar el molde completo o las partes superior e inferior por separado
- **Diseño responsivo**: Interfaz moderna que funciona en dispositivos móviles y escritorio

## 🚀 Uso

1. **Subir archivo**: Arrastra tu archivo STL a la zona de carga o haz clic para seleccionarlo
2. **Configurar parámetros**: Ajusta el grosor de paredes, tolerancias y características de los encastres
3. **Generar molde**: Haz clic en "Generar Molde" para procesar tu archivo
4. **Vista previa**: Observa el resultado en el visor 3D interactivo
5. **Descargar**: Obtén los archivos STL del molde generado

## ⚙️ Parámetros Configurables

### Grosor de Paredes (1-10mm)
Controla el espesor de las paredes del molde. Valores más altos proporcionan mayor resistencia pero requieren más material.

### Tolerancia (0.1-2mm)
Espacio adicional entre el objeto y el molde para facilitar el desmoldeo. Ajusta según el material y la precisión de tu impresora.

### Tamaño de Encastres (2-15mm)
Dimensión de los elementos de conexión entre las partes del molde. Encastres más grandes proporcionan mejor alineación.

### Espaciado de Encastres (10-50mm)
Distancia entre cada encastre a lo largo del perímetro del molde. Menor espaciado aumenta la precisión del cierre.

## 📋 Requisitos

- Navegador web moderno con soporte para WebGL
- Archivos STL válidos (formato binario o ASCII)
- Conexión a internet para cargar las librerías Three.js

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura y semántica
- **CSS3**: Estilos modernos con gradientes y efectos
- **JavaScript ES6+**: Lógica de la aplicación
- **Three.js**: Renderizado 3D y manipulación de geometría
- **WebGL**: Aceleración gráfica por hardware

## 📁 Estructura del Proyecto

```
stl-mold-generator/
├── index.html          # Página principal
├── stl-processor.js    # Procesamiento avanzado de STL
├── README.md          # Documentación
└── LICENSE            # Licencia del proyecto
```

## 🛠️ Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/stl-mold-generator.git
   ```

2. Navega al directorio:
   ```bash
   cd stl-mold-generator
   ```

3. Abre `index.html` en tu navegador web o utiliza un servidor local:
   ```bash
   python -m http.server 8000
   # o
   npx serve .
   ```

## 🌐 Despliegue en GitHub Pages

1. Sube todos los archivos a tu repositorio de GitHub
2. Ve a Settings > Pages en tu repositorio
3. Selecciona "Deploy from a branch" 
4. Elige la rama `main` y la carpeta `/ (root)`
5. Tu aplicación estará disponible en: `https://tu-usuario.github.io/nombre-repositorio`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📝 Notas Técnicas

- El procesamiento se realiza completamente en el navegador
- Los archivos STL grandes pueden tardar más en procesarse
- La calidad del molde depende de la complejidad del modelo original
- Se recomienda usar modelos con superficies cerradas para mejores resultados

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🐛 Reporte de Bugs

Si encuentras algún problema, por favor abre un issue en GitHub con:

- Descripción del problema
- Pasos para reproducir el error
- Navegador y versión utilizada
- Archivo STL de ejemplo (si es posible)

## 📞 Soporte

Para soporte técnico o preguntas, abre un issue en el repositorio de GitHub.

---

⭐ Si este proyecto te fue útil, ¡dale una estrella en GitHub!
