import {  MODEL_ROUTE, VULNERABILITES_ROUTE,REPORTS_ROUTE, NODS_ROUTE, CONTAINERS_ROUTE, NETS_ROUTE, CONSOLE_ROUTE, NETCONF_ROUTE,
    LICENSECONF_ROUTE, AUDITCONF_ROUTE, USERSCONF_ROUTE,  INTEGRATION_ROUTE} from "./RouterConst";

export   const usermenu =[
        {link:VULNERABILITES_ROUTE, icon: 'fa-warning', name: 'Уязвимости' },
        {link:MODEL_ROUTE, icon: 'fa-puzzle-piece', name: 'Модель' },
        {link:NODS_ROUTE, icon: 'fa-tasks', name: 'Ноды' },
        {link:CONTAINERS_ROUTE, icon: 'fa-inbox', name: 'Контейнеры' },
        {link:NETS_ROUTE, icon: 'fa-sitemap', name: 'Сети' },
        {link:CONSOLE_ROUTE, icon: 'fa-terminal', name: 'Консоль' },
        {link:REPORTS_ROUTE, icon: 'ti-pencil-alt', name: 'Отчеты' },
    ] 

export   const adminmenu =[
   
        {link: NETCONF_ROUTE, icon: 'fa-cloud-download', name: 'Сеть' },
        {link: LICENSECONF_ROUTE, icon: ' fa-key', name: 'Лицензия' },
        {link: AUDITCONF_ROUTE, icon: 'fa-search-plus', name: 'Аудит' },
        {link: USERSCONF_ROUTE, icon: 'fa-group', name: 'Пользователи' },
        {link: INTEGRATION_ROUTE, icon: 'fa-cogs', name: 'Интеграции' },

    ] 