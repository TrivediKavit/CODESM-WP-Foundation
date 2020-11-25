export function enableCallrailTracking()
{
    // 'use strict';

    // function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    jQuery.fn.extend({
        getPath: function getPath() {
            var pathes = [];

            this.each(function (index, element) {
                var path,
                    $node = jQuery(element);

                while ($node.length) {
                    var realNode = $node.get(0),
                        name = realNode.localName;
                    if (!name) {
                        break;
                    }

                    name = name.toLowerCase();
                    var parent = $node.parent();
                    var sameTagSiblings = parent.children(name);

                    if (sameTagSiblings.length > 1) {
                        var allSiblings = parent.children();
                        var index = allSiblings.index(realNode) + 1;
                        if (index > 0) {
                            name += ':nth-child(' + index + ')';
                        }
                    }

                    path = name + (path ? ' > ' + path : '');
                    $node = parent;
                }

                pathes.push(path);
            });

            return pathes.join(',');
        }
    });

    // ADD CALLRAIL TRIGGER
    var forms = document.querySelectorAll('form');
    [...forms].forEach(form => {
    // [].concat(_toConsumableArray(forms)).forEach(function (form) {
        if (!form.hasAttribute('cr-attached')) {
            form.addEventListener('submit', function () {
                console.log(jQuery(form).getPath());
                CallTrk.captureForm(jQuery(form).getPath());
            });
        }
    });
}
