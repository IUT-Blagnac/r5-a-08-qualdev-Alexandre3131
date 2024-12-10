package dojo;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.*;
import java.util.*;

public class CocktailSteps {
    private Order order;

    @Given("{string} who wants to buy a drink")
    public void romeo_who_wants_to_buy_a_drink(String name) {
         order = new Order();
         order.declareOwner(name);
    }

    @When("an order is declared for {string}")
        public void an_order_is_declared_for_juliette(String name) {
        order.declareTarget(name);
    }

    @Then("there is {int} cocktail in the order")
    public void there_is_no_cocktail_in_the_order(int nb) {
        List<String> cocktails =  order.getCocktails();
        assertEquals(nb, cocktails.size());
    }
}

class Order {
    private static String owner;
    private static String target;
    private static List<String> cocktails = new ArrayList<String>();
        
    static void declareOwner(String newOwner) {
        owner = newOwner;
    }

    static void declareTarget(String newTarget) {
        target = newTarget;
    }

    static List<String> getCocktails() {
        return cocktails;
    }
}