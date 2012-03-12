isc.PortalLayout.create({
    ID: "portalLayout",
    canResizePortlets: true,
    canResizeColumns: true,
    portlets: [
        [ // Array for left column
            isc.Portlet.create({
                title: "Portlet 1"
            }),
            [ // Array for a row
                isc.Portlet.create({
                    title: "Portlet 2"
                }),
                isc.Portlet.create({
                    title: "Portlet 3"
                })
            ]
        ],[ // Array for right column
            [
                isc.Portlet.create({
                    title: 'Portlet 4'
                }),
                isc.Portlet.create({
                    title: 'Portlet 5'
                })
            ],
            isc.Portlet.create({
                title: 'Portlet 6'
            })
        ]
    ]
});

isc.DynamicForm.create({
    ID: "form",
    fields: [{
        title: "Can Stretch Column Widths",
        type: "checkbox",
        defaultValue: true,
        changed : function (form, item, value) {
            portalLayout.setCanStretchColumnWidths(value);
        }
    },{
        title: "Can Shrink Column Widths",
        type: "checkbox",
        defaultValue: true,
        changed : function (form, item, value) {
            portalLayout.setCanShrinkColumnWidths(value);
        }
    }]
});

isc.VLayout.create({
    width: "100%",
    height: "100%",
    membersMargin: 10,
    members: [
        form,
        portalLayout
    ]
});
