
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('data').del()
    .then(function () {
      // Inserts seed entries
      return knex('data').insert([
        {
          //has vehicle in general?
          //general data
          current_location: 81401,
          timestamp: 20181026,
          desired_relocation: 87401,
          sex: "male",
          relationship_status: "married",
          orientation: "straight",
          age: 28,
          race: "white",
          safe_status: "yes",
          employed: "no",
          partner_employed: "yes",
          children: "yes",
          personal_savings: 1000,
          individual_income: 500,

          //child care
          //personal budget
          transportation: 50,
          food: 200,
          health_care: 0,
          car_loans: 0,
          personal_loans: 0,
          personal_other: 200,
          personal_budget_total: 450,

          //relocation budget
          travel_costs: 50,
          rental_deposit: 500,
          utility_connection: 100,
          storage_unit: 50,
          rent: 600,
          car_rental: 0,
          cell_phone: 100,
          moving_truck: 300,
          mental_health: 0,
          income_loss: 0,
          additional_security: 100,
          relocation_other: 200,
          relocation_budget_total: 2000,

          //calculated results
          calculated_difference: 1450,
        }
      ]);
    });
};
