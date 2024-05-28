export function getMenuConfig(){

    function getMenu(menuContext) {
        console.log('menuCOntext-', menuContext);
        switch (menuContext) {
            case 'testMenu1': {
                return {
                    items: [
                        {
                            label: 'Page Setup',
                            action: 'pageSetup',
                            type: 'mItem'
                        },
                        {
                            label: 'New Card',
                            action: 'newCard',
                            type: 'mItem'
                        }
                    ],
                    currentSelectedMenuOption: 'pageSetup',
                    style: 'color:blue; font-family: Geneva; font-size: 14px;',
                    hoverStyle: 'color:red; font-family: Geneva; font-size: 14px;',
                    menuType: 'main'

                }
            }
            case 'loginMenu': {
                debugger;
                return {
                    items: [
                        {
                            label: 'Login',
                            action: 'sendLogin',
                            type: 'mItem'
                        },
                        {
                            label: 'Cancel',
                            action: 'cancel',
                            type: 'mItem'
                        }
                    ],
                    currentSelectedMenuOption: 'pageSetup',
                    style: 'color:blue; font-family: Geneva; font-size: 14px;',
                    hoverStyle: 'color:red; font-family: Geneva; font-size: 14px;',
                    menuType: 'main'

                }
            }
            case 'adminLogged': {
                return {
                    items: [
                        {
                            label: 'Page',
                            action: 'pageSetup',
                            type: 'dropDownMenuItem',
                            submenu: {
                                items:[
                                    {
                                        label: 'Edit Page',
                                        action: 'editPage'
                                    },
                                    {
                                        label: 'Page Settings',
                                        action: 'pageSettings'
                                    },

                                ]
                            }
                        },
                        {
                            label:'Delete',
                            action: 'deletePage',
                            type: 'mItem'
                        },
                        {
                            label:'Publish',
                            action: 'publish',
                            type: 'mItem'
                        },
                        {
                            label: 'Create',
                            action: 'pageSetup',
                            type: 'dropDownMenuItem',
                            submenu: {
                                items:[
                                    {
                                        label: 'One Window Page',
                                        action: 'oneWindow'
                                    },
                                    {
                                        label: 'Long Page',
                                        action: 'extPage'
                                    },
                                    {
                                        label: 'Bulk Email Draft',
                                        action: 'emailPage'
                                    }
                                ]
                            }
                        },

                        /*
                                      {
                                        label:'Create',
                                        action: 'pageSetup',
                                        type: 'mItem'
                                      },

                         */
                        {
                            label:'Access',
                            action: 'pageAccess',
                            type: 'mItem'
                        },
                        {
                            label:'My Spaces',
                            action: 'mySpaces',
                            type: 'mItem'
                        }
                    ],
                    currentSelectedMenuOption: 'pageSetup',
                    style: 'color:blue; font-family: Geneva; font-size: 14px;',
                    hoverStyle: 'color:red; font-family: Geneva; font-size: 14px;',
                    menuType: 'main'

                }
            }
        }

    }
    return {getMenu};
}
