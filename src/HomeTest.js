import React from 'react';
import { ReactAgenda, ReactAgendaCtrl, guid, Modal } from 'react-agenda';

import 'react-agenda/build/styles.css';


var colors = {
  'color-1': "rgb(91, 155, 213 , 1)",
  "color-2": "rgba(242, 177, 52, 0.5)",
  "color-3": "rgba(235, 85, 59, 0.5)"
}


var now = new Date();


var items = [
  {
    _id: 3,
    name: 'Office Open',
    startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7, 0),
    endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0),
    classes: 'color-1'
  },
  {
    _id: 4,
    name: 'JoshBooking',
    startDateTime: new Date("Mon Apr 01 2019 12:45:00"),
    endDateTime: new Date("Mon Apr 01 2019 15:45:00"),
    classes: 'color-1'
  },
  {
    _id: 5,
    name: 'Bruno Booking',
    startDateTime: new Date("Mon Apr 01 2019 12:00:00"),
    endDateTime: new Date("Mon Apr 01 2019 12:30:00"),
    classes: 'color-1'
  },
  {
    _id: 6,
    name: 'Office Closed',
    startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0),
    endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 0),
    classes: 'color-1'
  },
  {
    _id: 'event-4',
    name: 'Working lunch , Holly',
    startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 0),
    endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 13, 0),
    classes: 'color-2 color-3'
  },
];

export default class Agenda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      selected: [],
      cellHeight: 12,
      showModal: true,
      locale: "en",
      rowsPerHour: 4,
      numberOfDays: 1,
      startDate: new Date()
    }
    this.handleCellSelection = this.handleCellSelection.bind(this)
    this.handleItemEdit = this.handleItemEdit.bind(this)
    this.handleRangeSelection = this.handleRangeSelection.bind(this)
  }

  componentDidMount() {

    this.setState({ items: items })
  }


  componentWillReceiveProps(next, last) {
    if (next.items) {
      this.setState({ items: next.items })
    }
  }
  handleItemEdit(item, openModal) {

    if (item && openModal === true) {
      this.setState({ selected: [item] })
      return this._openModal();
    }
  }
  handleCellSelection(item, openModal) {

    if (this.state.selected && this.state.selected[0] === item) {
      return this._openModal();
    }
    this.setState({ selected: [item] })
  }

  zoomIn() {
    var num = this.state.cellHeight + 15
    this.setState({ cellHeight: num })
  }
  zoomOut() {
    var num = this.state.cellHeight - 15
    this.setState({ cellHeight: num })
  }

  handleDateRangeChange(startDate, endDate) {
    this.setState({ startDate: startDate })
  }

  handleRangeSelection(selected) {
    this.setState({ selected: selected, showCtrl: true })
    this._openModal();

  }

  _openModal() {
    this.setState({ showModal: true })
  }
  _closeModal(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ showModal: false })
  }

  handleItemChange(items, item) {

    this.setState({ items: items })
  }

  handleItemSize(items, item) {

    this.setState({ items: items })

  }

  removeEvent(items, item) {

    this.setState({ items: items });
  }

  addNewEvent(items, newItems) {

    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
  }
  editEvent(items, item) {

    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
  }

  changeView(days, event) {
    this.setState({ numberOfDays: days })
  }
  render() {
    return (
      <ReactAgenda
        minDate={now}
        maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
        startAtTime={8}
        endAtTime={19}
        disablePrevButton={false}
        startDate={this.state.startDate}
        cellHeight={this.state.cellHeight}
        locale={this.state.locale}
        items={this.state.items}
        numberOfDays={this.state.numberOfDays}
        rowsPerHour={this.state.rowsPerHour}
        itemColors={colors}
        autoScale={false}
        fixedHeader={false} />
    );
  }
}