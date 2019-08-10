'use strict';

module.exports = {
	clear:            require('./clear'),
	compact:          require('./compact'),
	compare:          require('./compare'),
	copy:             require('./copy'),
	count:            require('./count'),
	descriptor:       require('./descriptor'),
	diff:             require('./diff'),
	every:            require('./every'),
	extend:           require('./extend'),
	extendDeep:       require('./extend-deep'),
	extendProperties: require('./extend-properties'),
	filter:           require('./filter'),
	flatten:          require('./flatten'),
	forEach:          require('./for-each'),
	getPropertyNames: require('./get-property-names'),
	is:               require('./is'),
	isCallable:       require('./is-callable'),
	isCopy:           require('./is-copy'),
	isEmpty:          require('./is-empty'),
	isList:           require('./is-list'),
	isObject:         require('./is-object'),
	isPlainObject:    require('./is-plain-object'),
	keyOf:            require('./key-of'),
	map:              require('./map'),
	mapKeys:          require('./map-keys'),
	mapToArray:       require('./map-to-array'),
	reduce:           require('./reduce'),
	safeTraverse:     require('./safe-traverse'),
	some:             require('./some'),
	toPlainObject:    require('./to-plain-object'),
	validCallable:    require('./valid-callable'),
	validValue:       require('./valid-value'),
	values:           require('./values')
};
