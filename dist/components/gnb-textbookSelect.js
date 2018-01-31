'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gnbWookbook = function (_wepy$component) {
  _inherits(gnbWookbook, _wepy$component);

  function gnbWookbook() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, gnbWookbook);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = gnbWookbook.__proto__ || Object.getPrototypeOf(gnbWookbook)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      value: {
        type: Number,
        twoWay: true
      }
    }, _this.data = {
      name: '',
      textbookArray: [{
        id: 3,
        name: '三年级上'
      }, {
        id: 4,
        name: '四年级上'
      }, {
        id: 5,
        name: '五年级上'
      }, {
        id: 6,
        name: '六年级上'
      }]
    }, _this.methods = {
      bindPickerChange: function bindPickerChange(e) {
        this.value = e.detail.value;
        this.$emit('event', Number(this.value) + 3);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return gnbWookbook;
}(_wepy2.default.component);

exports.default = gnbWookbook;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImduYi10ZXh0Ym9va1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJnbmJXb29rYm9vayIsInByb3BzIiwidmFsdWUiLCJ0eXBlIiwiTnVtYmVyIiwidHdvV2F5IiwiZGF0YSIsIm5hbWUiLCJ0ZXh0Ym9va0FycmF5IiwiaWQiLCJtZXRob2RzIiwiYmluZFBpY2tlckNoYW5nZSIsImUiLCJkZXRhaWwiLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUMsTUFERDtBQUVMQyxnQkFBUTtBQUZIO0FBREQsSyxRQU9SQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLHFCQUFlLENBQ2I7QUFDRUMsWUFBSSxDQUROO0FBRUVGLGNBQU07QUFGUixPQURhLEVBS2I7QUFDRUUsWUFBSSxDQUROO0FBRUVGLGNBQU07QUFGUixPQUxhLEVBU2I7QUFDRUUsWUFBSSxDQUROO0FBRUVGLGNBQU07QUFGUixPQVRhLEVBYWI7QUFDRUUsWUFBSSxDQUROO0FBRUVGLGNBQU07QUFGUixPQWJhO0FBRlYsSyxRQXFCUEcsTyxHQUFVO0FBQ1JDLHNCQURRLDRCQUNVQyxDQURWLEVBQ2E7QUFDbkIsYUFBS1YsS0FBTCxHQUFhVSxFQUFFQyxNQUFGLENBQVNYLEtBQXRCO0FBQ0EsYUFBS1ksS0FBTCxDQUFXLE9BQVgsRUFBb0JWLE9BQU8sS0FBS0YsS0FBWixJQUFxQixDQUF6QztBQUNEO0FBSk8sSzs7OztFQTdCNkIsZUFBS2EsUzs7a0JBQXpCZixXIiwiZmlsZSI6ImduYi10ZXh0Ym9va1NlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ25iV29va2Jvb2sgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9XG4gIH1cblxuICBkYXRhID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIHRleHRib29rQXJyYXk6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICfkuInlubTnuqfkuIonXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogJ+Wbm+W5tOe6p+S4iidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAn5LqU5bm057qn5LiKJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIG5hbWU6ICflha3lubTnuqfkuIonXG4gICAgICB9XG4gICAgXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZFBpY2tlckNoYW5nZSAoZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLiRlbWl0KCdldmVudCcsIE51bWJlcih0aGlzLnZhbHVlKSArIDMpXG4gICAgfVxuICB9XG59XG4iXX0=