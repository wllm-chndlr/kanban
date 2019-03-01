import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        updateCard(list, title) {
            this.model.setProperties({ list, title });
            this.model.save();
            this.transitionToRoute('cards');

        },
        deleteCard() {
            this.model.destroyRecord()
                .then(() => {
                    this.transitionToRoute('cards');
                })
        }
    }
});
