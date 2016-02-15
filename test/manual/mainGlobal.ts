///<reference path="../../dist/chartViewer.d.ts"/>

module main {
    export function start() {
        var el = document.getElementById("chart");

        ChartViewer.show(el, {
            "elem1": Plot.line({
                x: [1, 2, 3, 4],
                y: [1, 4, 6, 9],
                thickness: 3,
                displayName: "y[x]",
                titles: {
                    x: "w", y: "c"
                }
            }),
            "elem2": Plot.markers({
                x: [1, 2, 3, 4],
                y: [1, 4, 6, 9],
                shape: Plot.MarkerShape.Cross,
                size: 8,
                color: "red",
                displayName: "mark"
            }),
            "elem3": Plot.heatmap({
                x: [-1, 0, 1, -1, 0, 1, -1, 0, 1],
                y: [-1, -1, -1, 0, 0, 0, 1, 1, 1],
                values: [0.1, 0.2, 0.23, -0.5, 0.1, 0.2, -0.2, 0.4, 0.3],
                colorPalette: "red, purple",
                displayName: "map"
            })
        });  
    }
}