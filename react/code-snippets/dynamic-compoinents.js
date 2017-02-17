<main id="app"></main>
<script type="text/jsx">
    (function(window) {
        'use strict';
        var React = window.React;

        var data = {
            items: [{
                itemClass: 'Item',
                id: 1,
                contentsHTML: '',
                text: 'Item 1'
            }, {
                itemClass: 'Item',
                id: 2,
                contentsHTML: '',
                text: 'Item 2'
            }, {
                itemClass: 'Item',
                id: 3,
                contentsHTML: '',
                text: 'Item 3'
            }, {
                itemClass: 'Item',
                id: 4,
                contentsHTML: '',
                text: 'Item 4'
            }, {
                itemClass: 'Item',
                id: 5,
                contentsHTML: '',
                text: 'Item 5'
            }]
        };

        var MyCatalog = React.createClass({
            getInitialState: function() {
                return {
                    data: {
                        items: []
                    }
                };
            },

            componentDidMount: function() {
                this.setState({
                    data: this.props.data
                });
            },

            render: function() {
                return ( < div className = "catalog" > HELLO !! !I AM A CATALOG !! !

                < ItemList data = {
                    this.state.data
                }
                />
            </div > );
            }
        });

        var ItemList = React.createClass({
            render: function() {
                console.log(this.props);

                var items = this.props.data["items"].map(function(itemData) {
                    var component = Components[itemData['itemClass']];
                    return React.createElement(component, {
                        data: itemData,
                        key: itemData['id']
                    });
                });
                console.log(items);
                return (
                    <div className="list">
                        <div>And I am an ItemList</div>
                        <div>{items}</div>
                    </div>
                );
            }
        });

        var Item = window.Item = React.createClass({
            render: function() {
                return ( < div className = "item" > < div > Regular item.Nothing special. < /div>
              {this.props.children}
            </div > );
            }
        });

        var Components = {
            'Item': Item
        };

        React.render( < MyCatalog data = {
            data
        }
        />, 
        document.getElementById('app') 
      );
      
    } (this));
</script>

//------------------

//You can't use JSX syntax like this <component .../> because when it gets transpiled component won't refer to anything.
//UPDATE: Here is the updated ItemList component in full:

var ItemList = React.createClass({
    render: function() {
        console.log(this.props);

        var items = this.props.data["items"].map(function(itemData) {
            var component = Components[itemData['itemClass']];
            return React.createElement(component, {
                data: itemData,
                key: itemData['id']
            });
        });
        console.log(items);
        return (
            <div className="list">
                <div>And I am an ItemList</div>
                <div>{items}</div>
            </div>
        );
    }
});
//You can see it working in this fiddle: http://jsfiddle.net/fmhhtk5o/3/