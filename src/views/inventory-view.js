(function () {

  window.InventoryView = Backbone.View.extend({
    events: {
      'click .add-shirts': 'addShirts'
    },

    addShirts: function (e) {
      var type = $(e.currentTarget).data('type');
      console.log('Adding one of every', type, 'shirt for', this.options.shirts);
      // TODO: Write a for loop to iterate through this.options.shirts and
      // add +1 to each of that shirt's `type` inventory.
      // For example, if type === 'small', then add +1 to every small stock
      // in each shirt in this.options.shirts. Use .set(???) for this.


      for(var i = 0; i < this.options.shirts.length; i++) {
        var count = this.options.shirts[i].get(type);
        // var mediumCount = this.options.shirts[i].get('medium');
        // var largeCount = this.options.shirts[i].get('large');

        // mediumCount++;
        // largeCount++;

        console.log(count);

        // this.options.shirts[i].set({ small: count + 1 });
        this.options.shirts[i].set(type, count + 1);


        // this.options.shirts[i].set({medium: mediumCount});
        // this.options.shirts[i].set({large: largeCount});

      }
    }
  });

})();
