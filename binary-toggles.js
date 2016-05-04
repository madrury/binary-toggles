var binary_toggle = function(nm) {

    const name = nm
    var possible_values = [0, 1]
    var current_value
    var parent_elem

    return {

        // Bind the binary toggle to a parent dom element
        //    par: A jquery dom element, the parent to bind the binary
        //      toggle under.
        render: function(par) {
            parent_elem = par
            parent_elem.append('Toggle for ' + name)
                       .append('<input type=radio name="' + name + '" value=yes>Yes')
                       .append('<input type=radio name="' + name + '" value=no>No')
                       .append('<br>')
        },

        // Bind event listeners to chnges of radio selection.  This keeps the
        // current value in the object updated, so we can avoid selector
        // shennanigans when we need to retrieve the current values.
        bind_listeners: function() {
            $('input:radio[name=' + name + ']').change(function() {
                if($(this).attr('value') === 'yes') {
                    current_value = 1
                    alert('Current value of ' + name + ' changed to yes.')
                }
                else {
                    current_value = 0
                    alert('Current value of ' + name + ' changed to no.')
                }
            })
        },

        // Select a specific value of the toggle.
        select: function(value) {
            current_value = (value === 'yes') ? 1 : 0
            parent_elem.find('input:radio[name=' + name + '][value=' + value + ']')
                        .prop('checked', true)
        }

        // Initialize the sate of a new binary toggle.
        // Pure convenience function.

    }

}
