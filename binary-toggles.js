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
            parent_elem.append('<p>')
                       .append('Toggle for ' + name)
                       .append('<input type=radio name="' + name + '" value=yes>Yes')
                       .append('<input type=radio name="' + name + '" value=no>No')
                       .append('</p>')
        },

        // Select a specific value of the toggle
        select: function(value) {
            current_value = value
            parent_elem.find('input[name=' + name + '][value=' + value + ']')
                        .prop('checked', true)
        }

    }

}
