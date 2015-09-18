class Rating {
    constructor(options) {
        this.paper = new Raphael(document.getElementById(options.canvasId), options.width, options.height);
        this.bcgCircle = this.paper.circle(options.width/2, options.height/2, options.width/2 - options.strokeWidth.bcg).attr({
            'fill' : options.colors.bcg,
            'stroke-width' : options.strokeWidth.bcg,
            'stroke' : options.colors.strokeBcg
        });
        let stepPct = options.rating / 100;
        if(stepPct === 1){
            stepPct = 0.9999;
        }
        this.circle = this.sector(false, options.width/2, options.height/2, options.width/2 - options.strokeWidth.bcg - options.offsets.inner, 90, stepPct * 360 + 90, {
            stroke : options.colors.inner,
            'stroke-width' : options.strokeWidth.inner
        });
        let label = options.withPercent ? options.rating + '%' : options.rating;
        this.rating = this.paper.text(options.width/2, options.height/2 - options.offsets.rating, label).attr({
            'font-size' : options.fontSize.rating,
            fill : options.colors.rating,
            'font-family' : options.fontFamily.rating
        });
    }

    sector(tp, cx, cy, r, startAngle, endAngle, params) {
        let rad = Math.PI / 180,
            x1 = cx + r * Math.cos(-startAngle * rad),
            x2 = cx - r * Math.cos(-endAngle * rad),
            y1 = cy + r * Math.sin(-startAngle * rad),
            y2 = cy + r * Math.sin(-endAngle * rad);
        if(tp){
            return ["M", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 1, x2, y2];
        } else {
            return this.paper.path(["M", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 1, x2, y2]).attr(params);    
        }
    }
}

module.exports = Rating;