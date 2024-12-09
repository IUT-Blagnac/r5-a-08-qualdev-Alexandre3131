package hellocucumber;

import io.cucumber.java.en.*;

import org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class StepDefinitions {
    String today;
    String expectedAnswer;
    String actualAnswer;

    @Given("today is Sunday")
    public void today_is_sunday() {
        today = "Sunday";
    }
    @Given("today is Friday")
    public void today_is_friday() {
        today = "Friday";
    }
    @When("I ask whether it's Sunday yet")
    public void i_ask_whether_it_s_sunday_yet() {
        actualAnswer = IsItSunday.isItSunday(today);
    }
    @When("I ask whether it's Friday yet")
    public void i_ask_whether_it_s_friday_yet() {
        actualAnswer = IsItFriday.isItFriday(today);
    }
    @Then("I should be told {string}")
    public void i_should_be_told(String expectedAnswer) {
            assertEquals(expectedAnswer, actualAnswer);
    }

    @Given("an example scenario")
    public void anExampleScenario() {
    }

    @When("all step definitions are implemented")
    public void allStepDefinitionsAreImplemented() {
    }

    @Then("the scenario passes")
    public void theScenarioPasses() {
    }

}

class IsItFriday {
        static String isItFriday(String today) {
            return "Friday".equals(today) ? "TGIF" : "Non";
        }
    }
class IsItSunday {
        static String isItSunday(String today) {
            return "Sunday".equals(today) ? "TGIF" : "Non";
        }
    }
