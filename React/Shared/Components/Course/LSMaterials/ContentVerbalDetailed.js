import React  from "react";
import {
  Typography,
  makeStyles,
  Button,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";
import learningStyles from "../../../Data/learningStyles";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

const handleSubmit = async (e, props) => {
  e.preventDefault();

  const category = props.match.params.category;

  const lsType = props.match.params.ls_type;

  const course = props.match.params.course;

  const lsContents = learningStyles.find(style => lsType === style.type)
    .contents;

  const path =
    lsContents.indexOf(category) + 1 < lsContents.length
      ? `/course/${course}/ls/${lsType}/${
          lsContents[lsContents.indexOf(category) + 1]
        }`
      : `/course/${course}/home`;

  props.history.push(path);
};

export default function ContentVerbalDetailed(props) {
  const classes = useStyles();
  return (
    <form autoComplete="off" noValidate>
      <List>
        <ListItem>
          <Typography variant="h2">Data Types in Java</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h6">
            There are majorly two types of languages.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            1 . First one is Statically typed language where each variable and
            expression type is already known at compile time. Once a variable is
            declared to be of a certain data type, it cannot hold values of
            other data types. Example: C, C++, Java.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            2 . The other is Dynamically typed languages. These languages can
            receive different data types over time. Example: Ruby, Python
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            Java is statically typed and also a strongly typed language because
            in Java, each type of data (such as integer, character, hexadecimal,
            packed decimal, and so forth) is predefined as part of the
            programming language and all constants or variables defined for a
            given program must be described with one of the data types.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h6">Java has two categories of data:</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            Primitive Data Type: such as boolean, char, int, short, byte, long,
            float and double
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            Non-Primitive Data Type or Object Data type: such as String, Array,
            etc.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h6">Primitive Data Type</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            Primitive data are only single values and have no special
            capabilities.
          </Typography>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="body1">
            There are 8 primitive data types:
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            1.boolean : boolean data type represents only one bit of information
            either true or false, but the size of boolean data type is virtual
            machine-dependent. Values of type boolean are not converted
            implicitly or explicitly (with casts) to any other type. But the
            programmer can easily write conversion code.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Syntax :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>boolean booleanVar;</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Size :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>Virtual Machine dependent</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Values :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>true, false</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Default Value :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>false</code>
          </Button>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="body1">
            2.byte : The byte data type is an 8-bit signed two’s complement
            integer. The byte data type is useful for saving memory in large
            arrays.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Syntax :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>byte byteVar;</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Size :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>1 byte ( 8 bits )</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Values :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>-128 to 127</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Default Value :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>0</code>
          </Button>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="body1">
            3.short : The short data type is a 16-bit signed two’s complement
            integer. Similar to byte, use a short to save memory in large
            arrays, in situations where the memory savings actually matters.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Syntax :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>short shortVar;</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Size :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>2 byte ( 16 bits )</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Values :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>-32, 768 to 32, 767 (inclusive)</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Default Value :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>0</code>
          </Button>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="body1">
            4.int : It is a 32-bit signed two’s complement integer.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Syntax :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>int intVar;</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Size :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>4 byte ( 32 bits )</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Values :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>-2, 147, 483, 648 to 2, 147, 483, 647 (inclusive)</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Default Value :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>0</code>
          </Button>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="body1">
            5.long : The long data type is a 64-bit two’s complement integer
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Syntax :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>long longVar;</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Size :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>8 byte ( 64 bits )</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Values :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>
              -9, 223, 372, 036, 854, 775, 808 to 9, 223, 372, 036, 854, 775,
              807 (inclusive)
            </code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Default Value :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>0</code>
          </Button>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="body1">
            6.float : The float data type is a single-precision 32-bit IEEE 754
            floating point. Use a float (instead of double) if you need to save
            memory in large arrays of floating point numbers.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Syntax :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>float floatVar;</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Size :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>4 byte ( 32 bits )</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Values :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>upto 7 decimal digits</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Default Value :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>0.0</code>
          </Button>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="body1">
            7.double : The double data type is a double-precision 64-bit IEEE
            754 floating point. For decimal values, this data type is generally
            the default choice.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Syntax :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>double doubleVar;</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Size :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>8 byte ( 64 bits )</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Values :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>upto 16 decimal digits</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Default Value :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>0.0</code>
          </Button>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="body1">
            8.char : The char data type is a single 16-bit Unicode character.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Syntax :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>char charVar;</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Size :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>2 byte ( 16 bits )</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Values :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>'\u0000' (0) to '\uffff' (65535)</code>
          </Button>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Default Value :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>'\u0000'</code>
          </Button>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="h6">
            Non-Primitive Data Type or Reference Data Types
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            The Reference Data Types will contain a memory address of variable
            value because the reference types won’t store the variable value
            directly in memory. They are strings, objects, arrays, etc.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            String : Strings are defined as an array of characters. The
            difference between a character array and a string is the string is
            terminated with a special character ‘\0’. Below is the basic syntax
            for declaring a string in Java programming language.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">Syntax :</Typography>
        </ListItem>
        <ListItem>
          <Button variant="outlined">
            <code>{`<String_Type> <string_variable> = “<sequence_of_string>”;`}</code>
          </Button>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="body1">
            Class: A class is a user-defined blueprint or prototype from which
            objects are created. It represents the set of properties or methods
            that are common to all objects of one type. In general, class
            declarations can include these components, in order:
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            1. Modifiers : A class can be public or has default access (Refer
            this for details).
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            2. Class name: The name should begin with a initial letter
            (capitalized by convention).
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            3. Superclass(if any): The name of the class’s parent (superclass),
            if any, preceded by the keyword extends. A class can only extend
            (subclass) one parent.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            4. Interfaces(if any): A comma-separated list of interfaces
            implemented by the class, if any, preceded by the keyword
            implements. A class can implement more than one interface.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            5. Body: The class body surrounded by braces, {}.
          </Typography>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="body1">
            Object: It is a basic unit of Object-Oriented Programming and
            represents the real-life entities. A typical Java program creates
            many objects, which as you know, interact by invoking methods. An
            object consists of :
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            1. State : It is represented by attributes of an object. It also
            reflects the properties of an object.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            2. Behavior : It is represented by methods of an object. It also
            reflects the response of an object with other objects.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            3. Identity : It gives a unique name to an object and enables one
            object to interact with other objects.
          </Typography>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="body1">
            Interface: Like a class, an interface can have methods and
            variables, but the methods declared in an interface are by default
            abstract (only method signature, no body).
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            1. Interfaces specify what a class must do and not how. It is the
            blueprint of the class.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            2. An Interface is about capabilities like a Player may be an
            interface and any class implementing Player must be able to (or must
            implement) move(). So it specifies a set of methods that the class
            has to implement.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            3. If a class implements an interface and does not provide method
            bodies for all functions specified in the interface, then class must
            be declared abstract.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            4. A Java library example is, Comparator Interface. If a class
            implements this interface, then it can be used to sort a collection.
          </Typography>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Typography variant="body1">
            Array: An array is a group of like-typed variables that are referred
            to by a common name.Arrays in Java work differently than they do in
            C/C++. Following are some important point about Java arrays.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            1. In Java all arrays are dynamically allocated.(discussed below)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            2. Since arrays are objects in Java, we can find their length using
            member length. This is different from C/C++ where we find length
            using sizeof.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            3. A Java array variable can also be declared like other variables
            with [] after the data type.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            4. The variables in the array are ordered and each have an index
            beginning from 0.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            5. A Java library example is, Comparator Interface. If a class
            implements this interface, then it can be used to sort a collection.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            6. Java array can be also be used as a static field, a local
            variable or a method parameter
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            7. The size of an array must be specified by an int value and not
            long or short.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            8. The direct superclass of an array type is Object.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body2">
            9. Every array type implements the interfaces Cloneable and
            java.io.Serializable.
          </Typography>
        </ListItem>
      </List>

      <Button
        variant="contained"
        color="primary"
        className={classes.handleButton}
        onClick={e => {
          handleSubmit(e, props);
        }}
      >
        Next
      </Button>
    </form>
  );
}
