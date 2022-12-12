import {BUTTONS_ROUTE, COMPONENTS_ROUTE,BASICTABLE_ROUTE ,BASICFORM_ROUTE ,FONTAWESSOME_ROUTE , 
    WIDGETS_ROUTE, CHARTS_ROUTE, MAPS_ROUTE, ICONS_ROUTE} from "./RouterConst";

export   const partition =[
        {link:BUTTONS_ROUTE, icon: 'fa-puzzle-piece', name: 'Buttons' },
        {link:COMPONENTS_ROUTE, icon: 'fa-cogs', name: 'Components' },
        {link:BASICTABLE_ROUTE, icon: 'fa-table', name: 'Basic Table' },
        {link:BASICFORM_ROUTE, icon: 'fa-th', name: 'Basic Form' },
    ] 
 
export   const operations =[
       
        {link: FONTAWESSOME_ROUTE, icon: 'fa-fort-awesome', name: 'Font Awesome' },
        {link: WIDGETS_ROUTE, icon: 'ti-email', name: 'Widgets' },
        {link: CHARTS_ROUTE, icon: 'fa-line-chart', name: 'Charts JS' },
        {link: MAPS_ROUTE, icon: 'fa-map-o', name: 'Maps' },
        {link: ICONS_ROUTE, icon: 'fa-area-chart', name: 'Icons' },

    ] 